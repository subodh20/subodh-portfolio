type AboutProps = {
  title: string;
};
const About = (props: AboutProps): JSX.Element => {
  const { title } = props;
  return <>{title}</>;
};
export default About;
