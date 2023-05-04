// currently only converts px or flat number values as px.
// feel free to expand if needed.

const rem = (value: number | string) => {
 let int: unknown = value;
 if (isNaN(value as number)) {
   const str = int as string;
   int = parseInt(str.replace("px", ""));
 } else {
 }
 return (int as number) / 16 + "rem";
};

export default rem;
