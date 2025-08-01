import styles from './SimilarProductSection.module.scss'
import SimilarProdutCard from '../../components/SimilarProdutCard/SimilarProdutCard'

import type { Product } from '../../types/Product'

type Props = {
	currentProduct: Product
}

const SimilarProductSection = ({ currentProduct }: Props) => {
	const similarProducts = Array.from({ length: 4 })

	return (
		<section>
			<div className={styles.container}>
				<h2 className={styles.title}>Podobné produkty</h2>
				<div className={styles.row}>
					{similarProducts.map((_, index) => (
						<SimilarProdutCard key={index} />
					))}
				</div>
			</div>
		</section>
	)
}

export default SimilarProductSection
