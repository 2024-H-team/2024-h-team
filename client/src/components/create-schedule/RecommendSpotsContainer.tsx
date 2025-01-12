import { PlaceDetails } from '@/types/PlaceDetails';
import Image from 'next/image';
import Styles from '@styles/componentStyles/create-schedule/RecommendSpotsContainer.module.scss';

interface RecommendSpotsContainerProps {
    recommendedSpots: PlaceDetails[];
}

export default function RecommendSpotsContainer({ recommendedSpots }: RecommendSpotsContainerProps) {
    if (!recommendedSpots.length) return null;

    return (
        <div className={Styles.container}>
            <h2>おすすめスポット</h2>
            <div className={Styles.spotsGrid}>
                {recommendedSpots.map((spot, index) => (
                    <div key={`${spot.placeId}-${index}`} className={Styles.spotCard}>
                        {spot.photos?.[0] && (
                            <div className={Styles.imageWrapper}>
                                <Image
                                    src={spot.photos[0].getUrl({ maxWidth: 200, maxHeight: 200 })}
                                    alt={spot.name}
                                    width={200}
                                    height={200}
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                        )}
                        <div className={Styles.spotInfo}>
                            <h3>{spot.name}</h3>
                            <p>{spot.address}</p>
                            {spot.rating && <p>Rating: {spot.rating}★</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
