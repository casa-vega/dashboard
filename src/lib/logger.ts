import pino from "pino";

const logger = pino({});

export const Logger = pino({
  browser: {
    write(obj) {
      try {
        console.log(JSON.stringify(obj));
      } catch (err) {
        if (err instanceof Error) {
          console.log(JSON.stringify(err, ["name", "message", "stack"]));
        }
        console.log(JSON.stringify({ message: "Unknown error type" }));
      }
    }
  }
});

export const logDebug = (message: string, ...args: any[]) => {
  Logger.debug(message, ...args);
};

export const logInfo = (message: string, ...args: any[]) => {
  Logger.info(message, ...args);
};

export const logWarn = (message: string, ...args: any[]) => {
  console.warn(message, ...args);
};

export const logError = (message: string, ...args: any[]) => {
  console.error(message, ...args);
};

export const logCritical = (message: string, ...args: any[]) => {
  console.error(message, ...args);
};

export default Logger;
