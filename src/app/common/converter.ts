export class Converter {
  public static arrayBufferToString(buf:ArrayBuffer): string{
    return String.fromCharCode.apply(null, new Uint16Array(buf));
  }
}
