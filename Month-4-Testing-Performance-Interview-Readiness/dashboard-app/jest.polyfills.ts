import 'whatwg-fetch';
import { TextEncoder, TextDecoder } from 'util';

// Polyfill TextEncoder/TextDecoder for Node.js environment (required by MSW)
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as any;
