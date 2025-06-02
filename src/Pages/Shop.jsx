import React from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import Newcollections from '../Components/NewCollections/Newcollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
//import Popular from "../Components/Popular/Popular";

const Shop = () => {
	return (
		<div className="">
			<Hero />
			<Popular />
			<Offers />
			<Newcollections />
			<NewsLetter />
		</div>
	);
};

export default Shop;
