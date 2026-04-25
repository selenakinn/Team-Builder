import FormContainer from './FormContainer';

export default function Main(props) {
  const { addUser } = props;
  return (
    <div className="products-container">
      <FormContainer addUser={addUser} />
    </div>
  );
}
