export const myLogger = function (req: any, res: any, next: () => void) {
    console.log('LOGGED');
    next();
}