/*
 exp = aluno.nota >=7

    <if test={ exp }>
        
        <span> ...<span>
        <span> ...<span>
        <span> ...<span>
        <span> ...<span>
        
    </if>
*/
const If = props =>{
    
    const elseChild = props.children.filter(child =>{
        return child.type && child.type.name === 'Else'
    })[0]
    console.log(elseChild);
    const ifChildren = props.children.filter(child =>{
        return child !== elseChild
    })


    if (props.test){
        
        return ifChildren

    } else if(elseChild){

        return elseChild;
        
    } else {
        return false;
    }
}

export default If;

export const Else = props =>props.children
