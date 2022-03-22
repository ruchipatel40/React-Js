// import React from "react";
// class ProductCategoryRow extends React.Component{
//     render(){
//         const category = this.props.category;
//         return(
//             <tr>
//                 <th colSpan='2'>
//                     {category}
//                 </th>
//             </tr>
//         )
//     }
// }
// class ProductRow extends React.Component{
//     render(){
//         const product = this.props.product;
//         const name = product.stocked ? product.name : <span style={{color:'red'}}>{product.name}</span>;
//         return(
//             <tr>
//                 <td>{name}</td>
//                 <td>{product.price}</td>
//             </tr>
//         )
//     }
// }
// class ProductTable extends React.Component{
//     render(){
//         const filterText = this.props.filterText;
//         const inStockOnly = this.props.inStockOnly;
//         const rows = [];
//         let lastCategory = null;

//         this.props.products.forEach((product) => {
//             if(product.name.indexOf(filterText) === -1){
//                 return ;
//             }
//             if(inStockOnly && !product.stocked){
//                 return;
//             }
//             if(product.category !== lastCategory){
//                 rows.push(
//                     <ProductCategoryRow category={product.category} key={product.category} />
//                 )
//             }
//             rows.push(
//                 <ProductRow product={product} key={product.name} />
//             )
//             lastCategory = product.category;
//         });
//         return(
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Price</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 {rows}
//                 </tbody>
//             </table>
//         )
//     }
// }
// class SearchBar extends React.Component{
//     constructor(props){
//         super(props);
//     }
//     handlefiltertextchange = (e) => {
//         this.props.onfiltertextchange(e.target.value);
//     }
//     handleinstockchange = (e) => {
//         this.props.onInstockchange(e.target.checked);
//     }
//     render(){
       
//         return(
//             <form>
//                 <input type='text' placeholder='Search...' value={this.props.filterText} onChange={this.handlefiltertextchange}/>
//                 <p>
//                     <input type='checkbox' checked={this.props.inStockOnly} onChange={this.handleinstockchange}/> Only show products in stock
//                 </p>
//             </form>
//         )
//     }
// }
// class FilterableProductTable extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             filterText : '',
//             inStockOnly: false
//         }
//     }
//     handlefiltertextchange = (filterText) =>{
//        this.setState({filterText:filterText})
//     }
//     handleinstockchange = (inStockOnly) =>{
//         this.setState({inStockOnly:inStockOnly})
//     }
//     render(){
        
//         return(
//             <div >
//                 <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} onfiltertextchange={this.handlefiltertextchange} onInstockchange={this.handleinstockchange}/>
//                 <ProductTable products={this.props.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} onInstockchange={this.handleinstockchange}/>
//             </div>
//         )
//     }
// }


//   export default FilterableProductTable;