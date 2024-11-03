const add = (numbers: string): number => {
  if (!numbers) {
    return 0;
}

let delimiter = ",";
if (numbers?.startsWith("//")) {
    const parts = numbers?.split("\n");
    delimiter = parts?.[0]?.slice(2);
    numbers = parts?.splice(1, parts?.length - 1)?.join('')?.replace(/\s+/g, '');
}

const numArray = numbers?.split(new RegExp(`[${delimiter},\\n]`))
                        .map(num => num?.trim())
                        .map(Number);
const negatives = numArray?.filter(num => num < 0);

if (negatives?.length > 0) {
    throw new Error(`Negative numbers are not allowed ${negatives?.join(", ")}`);
}

return numArray?.reduce((sum, num) => sum + num, 0);
};

export default add;
