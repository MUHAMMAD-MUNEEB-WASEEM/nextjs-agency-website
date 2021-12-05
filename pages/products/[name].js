import { data } from "../../data"
import styles from '../../styles/Product.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Product({product}) {
    return (
        <div className={styles.container}>
            <div className={styles.cardL}>
                {product.images.map(img=>(
                    <div key={img.id} className={styles.imgContainer}>
                    
                        <Image 
                        src={img.url}
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        layout="responsive"
                        alt=""
                        />
                    </div>
                ))}
            </div>
            <div className={styles.cardS}>
                <h1 className={styles.title}>{product.title}</h1>
                <p className={styles.desc}>{product.longDesc}</p>
                <button className={styles.button}>
                    <Link href='/contact'>Contact</Link>
                </button>
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const products = data

    //we can use it as props or path under return

    //we choose name as path ->> /products/name

     const paths = products.map((item) => {
        return {
        params: { name: item.name },
        };
  });

  //name of all products has been saved in params
  //curly bracket with return as used as dict to destructure easily

  return {
      paths,
      fallback:false,
  }

}

export const getStaticProps = async (ctx) => {

    //ctx : { params: { name: item.name } },

    const name = ctx.params.name;
    const product = data.filter(item=>item.name===name)[0]; //single product
    return {
        props: { product }
    }


}

//first we select name as path
//we use that path(name) in getStaticProps to fetch single product from data
//as use that single product as props 


export default Product
