const loading=true;
console.log(
  (loading==true)?"Loading....":"Not loading"
)

const data={
  age:10
}
let age=data.age ?? null;
console.log(age);

