let fakeData = {
  surname: 'tron',
  name: 'bakar',
  email: 'bakar@gmail.com'
};

function Component(props: any) {
  console.log(props);
  return <div>{props.surname}</div>;
}

export default function ObjectProps() {
  return (
    <div>
      {/*props გადაწოდება შეიძლება ამ სახითაც {...fakeData}, ამ შემთხვევაში fakeData ში არსბეული*/}
      {/*ყველა value იქნება ხელმისაწდომი Component კომპონენტში */}
      <Component {...fakeData} />
    </div>
  );
}
