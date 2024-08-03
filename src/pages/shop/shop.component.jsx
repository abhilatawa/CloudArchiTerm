import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'

const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        <CollectionsOverview />
    </div>
)

export default ShopPage;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
//
// const ShopPage = () => {
//     const [collections, setCollections] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);
//
//     useEffect(() => {
//         const fetchShopData = async () => {
//             try {
//                 const response = await axios.get('https://dor7goe341.execute-api.us-east-1.amazonaws.com/data/');
//                 console.log('API Response:', response.data); // Log the response
//                 if (Array.isArray(response.data)) {
//                     // Log each collection to inspect its structure
//                     response.data.forEach(collection => {
//                         console.log('Collection:', collection);
//                     });
//
//                     setCollections(response.data);
//                 } else {
//                     console.error('Expected an array but got:', response.data);
//                     setError('Unexpected data format');
//                 }
//                 setIsLoading(false);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//                 setError(error.message);
//                 setIsLoading(false);
//             }
//         };
//
//         fetchShopData();
//     }, []);
//
//     if (isLoading) {
//         return <div>Loading...</div>;
//     }
//
//     if (error) {
//         return <div>Error: {error}</div>;
//     }
//     const SHOP_DATA = collections;
//
//     return (
//         <div>
//             {collections.length === 0 ? (
//                 <div>No collections available</div>
//             ) : (
//                 collections.map(collection => (
//                     <div key={collection.id}>
//                         <h2>{collection.title}</h2>
//                         <div>
//                             {collection.items && collection.items.length > 0 ? (
//                                 collection.items.map(item => (
//                                     <div key={item.id}>
//                                         <img src={item.imageUrl} alt={item.name} />
//                                         <p>{item.name}</p>
//                                         <p>{item.price}</p>
//                                     </div>
//                                 ))
//                             ) : (
//                                 <div>No items available</div>
//                             )}
//                         </div>
//                     </div>
//                 ))
//             )}
//         </div>
//     );
//
// };
//
// export default ShopPage;
