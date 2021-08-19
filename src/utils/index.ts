export const convertKeys = <T>(obj: T) => {
    return Object.keys(obj).filter(item => (obj as Object).hasOwnProperty(item)).join('\n');
}