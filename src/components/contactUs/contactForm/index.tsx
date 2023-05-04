import { Button, FormWrapper, Input, TextArea, Wrapper } from "./styles";

const Form = () => {
  return (
    <Wrapper>
      <FormWrapper>
        <Input type="text" placeholder="First Name*" />
        <Input type="text" placeholder="Last Name" />
        <Input type="tel" placeholder="Phone Number" />
        <Input type="email" placeholder="Email" />
        <Input type="text" placeholder="Subject" />
        <TextArea placeholder="Message" />
        <Button type="submit">SEND</Button>
      </FormWrapper>
    </Wrapper>
  );
};

export default Form;
