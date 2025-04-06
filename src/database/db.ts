
const performSQL = async (text:string):Promise<Response> => {
    return await fetch(`/.netlify/functions/query?text=${text}`);
}