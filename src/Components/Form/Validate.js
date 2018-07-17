export const handleValidate = (values) => {
    const errors = {};
    
    if(!values.title){
        errors.title = 'Enter a title';
    } 
    if(!values.category){
        errors.category = 'Enter a category';
    }
    if(!values.content || values.content.length < 75){
        errors.content = 'Enter minimum 75 characters'
    }
    return errors;
}