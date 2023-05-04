export type HeroProptype = {
  heroData: {
    title: string;
    titleColor: string;
    description?: string;
  };
};
export type BenefitProptype = {
 data:{data:{
  title:string;
  titileColor:string;
  benefits:[{
   iconType:string;
   content:string;
  }]
 }}
}

export type CollapseProptype ={
  data:[string]
}
