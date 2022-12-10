import React from 'react';



const Carrousel = () => {
    return (
        <div>
            <p>Carrousel</p>
        </div>
    );
};

export default Carrousel;


// import React from 'react';
// import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import { listProducts } from '../../datas';
// const Carrousel = () => {
//     const Pictures = {listProducts.pictures}
//     const {CarrouselNumber} =useParams()
//     const CarrouselNumberInt = parseInt(CarrouselNumber)
//     const prevCarrouselNumber = CarrouselNumberInt === 1 ? 1 : CarrouselNumberInt -1
//     const nextCarrouselNumber = CarrouselNumberInt + 1
//     const [surveyData, setSurveyData] =useState({})
//     const  [isDaraLoading, setDataLoading]= useSate(false)
//     useEffect(()=>{
//         setDataLoading(true)
//         fetch({listProducts}).then((response)=> response.json()
//         .then(({surveyData}) => console.log(surveyData))
//         .catch((error)=> console.log(error))
//         )
//     },[])
//     return (
//         <CarrouselContainer>
//         <CarrouselTitle>Carrousel {CarrouselNumber}</CarrouselTitle>
//         <CarrouselContent>{surveyData[CarrouselNumber]}   </CarrouselContent>
//         <LinkWrapper>
//             <Link to={`/survey/${prevCarrouselNumber}`}>Précédent</Link>
//             {surveyData[CarrouselNumberInt + 1] ? (
//                 <Link to={`/survey/${nextCarrouselNumber}`}>Suivant</Link>
//             ) : (
//                 <Link to="/results">Résultats</Link>
//             )}
//         </LinkWrapper>
//     </CarrouselContainer>
//     );
// };

// export default Carrousel;