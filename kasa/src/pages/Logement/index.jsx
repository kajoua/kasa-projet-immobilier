import React from 'react';
import { useParams } from 'react-router-dom';
import { listProducts } from '../../datas';
import Carrousel from './Carrousel';
import Name from '../../pages/Logement/Name';
import Tags from '../../pages/Logement/Tags';
import Interior from '../../pages/Logement/Interior';
import Person from '../../pages/Logement/Person';

const Logement
 = () => {
    const { id } = useParams();
    const Logement = listProducts.find((c)=> c.id === id)
    
    return (
        <div>
           <Carrousel/>
           
           <Name/>
           <Tags/>
           <Person/>
           <Interior/>
        </div>
    );
};

export default Logement
;