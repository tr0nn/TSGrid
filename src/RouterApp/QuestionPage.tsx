import { useParams } from 'react-router-dom';

export default function QuestionPage() {
  let params = useParams();
  console.log(params);
  return <div>QuestionPage</div>;
}
