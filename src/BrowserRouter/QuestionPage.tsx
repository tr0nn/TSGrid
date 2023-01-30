import { useParams } from 'react-router-dom';

export default function QuestionPage() {
  let params = useParams<{ questionId: string }>();

  console.log(params);
  console.log(params.questionId);
  return <div>QuestionPage</div>;
}
