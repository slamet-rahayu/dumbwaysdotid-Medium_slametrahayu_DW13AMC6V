import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel'
import '../App.css';
import Cat from '../json/category';


function Category () {
return (
    <Container>
    <table cellPadding="12">
    <tr>
        <td>&lt;</td>
        {Cat.Category.map(s => (<td>{s}</td>))}
        <td>&gt;</td>
    </tr>
</table>
</Container>
);
}

export default Category;