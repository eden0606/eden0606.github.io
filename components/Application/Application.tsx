import { FunctionComponent } from 'react';

interface ApplicationProps {
  appName: string;
}

const Application: FunctionComponent<ApplicationProps> = ({ appName }) => {
  const ye = 'sd';
  return (
    <div>
      <div>icon</div>
      <div>{appName}</div>
    </div>
  );
};

export default Application;
