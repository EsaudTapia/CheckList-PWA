//creamos la estructur de bd 
const db = new Dexie("checklist App");
db.version(1).stores({
  checklist: "++id, nombre, img, estado"
});


const nuevo=document.querySelector('#add-product-submit');
const form=document.querySelector('#new-product-form');
const inputProduct=document.querySelector('#txtProducto');
const inputImg=document.querySelector('#txtImg');
const DivCheck=document.querySelector('#divCheckList');
const tbChecklist=document.querySelector('#tbCheckList');

nuevo.onclick= async (e)=>{
    e.preventDefault();
    const nombre=inputProduct.value;
    const img=inputImg.value;
    await db.checklist.add({nombre, img, estado: false});
    await getList();
    
    //eliminar los regidtros de dexie
    //await db.checklist.clear();
    //await db.checklist.delete(1);
    form.reset();
}







const getList= async ()=>{
    const allList= await db.checklist.toArray();  
    console.log(allList);
    tbChecklist.innerHTML='';
    tbChecklist.innerHTML=allList.map(
        (item)=> `       
        <tr>
            <td><img src="${item.img}" style="opacity: ${item.estado ? '0.3' : ''}" width="50px" height="50px"></td>           
            <td><span style="text-decoration: ${item.estado ? 'line-through' : 'none'}">${item.nombre}</span></td>
            <td><input type="checkbox" id="${item.id}" ${item.estado ? 'checked' : ''}></td>
            <td><button class="btn btn-danger btn-sm" onclick="deleteProduct(event,${item.id})" id="${item.id}">X</button></td>      
        `
    ).join('');
    
}

window.onload=getList;


//cuando se cambia el estado del checkbox se subraya el texto
tbChecklist.onclick = async (e)=>{
    const id=parseInt(e.target.id);
    //convertir a boolean
    const estadoNuevo= e.target.checked; 
    
    console.log(id, estadoNuevo);
    //actualizar en la bd
    await db.checklist.update(id, {estado:estadoNuevo});
    await getList();            
}


const deleteProduct = async(event,id)=>{
    await db.checklist.delete(id);
    await getList();
}




