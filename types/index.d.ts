interface Window {
    nativeTimer: {
        start(
            delay: number,
            interval: number,
            successCallback: (status: number) => void,
            errorCallback?: (fileError: NativeTimerError) => void): void;
        stop(
            successCallback: (status: number) => void,
            errorCallback?: (fileError: NativeTimerError) => void): void;
        checkState(
            state: string,
            errorCallback?: (fileError: NativeTimerError) => void): boolean;
        onTick(): void;
        onStop(): void;
        onError(): void;
        on(eventName: string,
           callback?: (data: any) => void): void;
    }
}

interface NativeTimerError {
    /** Error code */
    code: number;
}
interface ZipArchive {
    onError: (message: string) => void;
    zip(path: string, files: string[], options: {maxSize?: number}, success: () => void, error: (err: any) => void): void;
    on(event: 'progress'|'finish'|'error', callback: (e: any) => {}): ZipArchive
}

declare interface Window {
    zipArchive: {new(...args: any[]): ZipArchive };
}