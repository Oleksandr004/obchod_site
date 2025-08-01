import styles from './SimilarProdutCard.module.scss'
import productPhoto from '../../assets/similarPhoto.png'
import starsImg from '../../assets/stars.png'

const SimilarProdutCard = () => {
	return (
		<div className={styles.container}>
			<img src={productPhoto} alt='photo similar product' />
			<p className={styles.name}>
				Lorem Ipsum is simply <br /> dummy text
			</p>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<p className={styles.price}>550 Kč</p>
				<div>
					<img src={starsImg} alt='' />
				</div>
			</div>
			<button className={styles.btn}>Zobrazit produkt</button>
		</div>
	)
}

export default SimilarProdutCard
