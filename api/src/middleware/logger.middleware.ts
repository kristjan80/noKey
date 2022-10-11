import { writeFileSync, appendFileSync } from 'fs';
import { LOG_FILES } from '../../config/log.config';

export const accessEventLogger = function (req: any, res: any, next: () => void) {
    try {
        appendFileSync(LOG_FILES.ACCESS_LOG, "[time]: " + Date().toString() + " - [method]: " + req.method + " - [src]: " + req.ip + " - [url]: " + req.originalUrl + " - [header]: " + req.rawHeaders + " - [body]: " + req.body + " \r\n");
    } catch (error) {
        console.log("[logger.middleware][accessEventLogger][Error]: Failed to write to " + LOG_FILES.ACCESS_LOG + ". Check the file and path")
        console.log(error);
    }
   
    next();
}
/** 
 * FOR FUTURE USE - CURRENTLY JUST EMPTY TEMPLATES
*/
export const errorEventLogger = function (req: any, res: any, next: () => void) {
    try {
        appendFileSync(LOG_FILES.ERROR_LOG, "Testing Loggin");
    } catch (error) {
        console.log("[logger.middleware][errorEventLogger][Error]: Failed to write to " + LOG_FILES.ERROR_LOG + ". Check the file and path")
        console.log(error);
    }
    next();
}

export const securityEventLogger = function (req: any, res: any, next: () => void) {
    try {
        appendFileSync(LOG_FILES.SECURITY_LOG, "Testing Loggin");
    } catch (error) {
        console.log("[logger.middleware][securityEventLogger][Error]: Failed to write to " + LOG_FILES.SECURITY_LOG + ". Check the file and path")
        console.log(error);
    }
    next();
}

export const authEventLogger = function (req: any, res: any, next: () => void) {
    try {
        appendFileSync(LOG_FILES.AUTH_LOG, "Testing Loggin");
    } catch (error) {
        console.log("[logger.middleware][authEventLogger][Error]: Failed to write to " + LOG_FILES.AUTH_LOG + ". Check the file and path")
        console.log(error);
    }
    next();
}