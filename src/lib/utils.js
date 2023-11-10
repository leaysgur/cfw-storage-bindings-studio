const decoder = new TextDecoder();
const encoder = new TextEncoder();

export const decodeText = decoder.decode.bind(decoder);
export const encodeText = encoder.encode.bind(encoder);
