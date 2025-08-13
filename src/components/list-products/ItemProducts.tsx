
// interface Props {
//   title: string;
//   id: number;
// }

type Props = {
  title: string;
  id: number;
};


const ItemProducts = ({id,title}: Props) => {
    //console.log(id,title);
    //const {id,title} = props;
  return (
    <li>{id} - {title}</li>
  )
}

export default ItemProducts