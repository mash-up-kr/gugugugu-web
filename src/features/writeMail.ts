import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum WriteStep {
  Receiver = 1,
  Title,
  Content,
  Check,
}

export interface WriteMailState {
  step: WriteStep;
  mailContent: {
    [WriteStep.Receiver]: string;
    [WriteStep.Title]: string;
    [WriteStep.Content]: string;
  };
}

type MailContentKey = typeof WriteStep;

const writeMailSlice = createSlice({
  name: "writeMail",
  initialState: {
    step: WriteStep.Receiver,
    mailContent: {
      [WriteStep.Receiver]: "",
      [WriteStep.Title]: "",
      [WriteStep.Content]: "",
    },
  },
  reducers: {
    moveNextStep: (state) => {
      if (state.step !== WriteStep.Check) state.step = state.step + 1;
      else state.step = WriteStep.Receiver;
    },
    movePrevStep: (state) => {
      if (state.step !== WriteStep.Receiver) state.step = state.step - 1;
    },
    setMailContent: (state, { payload }: PayloadAction<{ contentType: WriteStep; content: string }>) => {
      switch (payload.contentType) {
        case WriteStep.Receiver: {
          state.mailContent[WriteStep.Receiver] = payload.content;
          break;
        }
        case WriteStep.Title: {
          state.mailContent[WriteStep.Title] = payload.content;
          break;
        }
        case WriteStep.Content: {
          state.mailContent[WriteStep.Content] = payload.content;
          break;
        }
        default:
          break;
      }
    },
  },
});

export const { moveNextStep, movePrevStep, setMailContent } = writeMailSlice.actions;

export const writeMailSelector = (state: { writeMail: WriteMailState }) => state.writeMail;

export default writeMailSlice.reducer;
