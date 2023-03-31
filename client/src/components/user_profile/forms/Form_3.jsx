import React, { useEffect, useState } from 'react'
import "../css/form_3.css"




import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';


import Chip from '@mui/material/Chip';







import { useFormik } from 'formik'
import * as Yup from 'yup';



const Form_3 = ({data,setData}) => {


    const [open, setOpen] = React.useState(true);







    const handleClick = () => {
        setOpen(!open);
    };



    const [checked, setChecked] = useState([]);



    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };








    // handling the gig title and gig description

    const [title, settitle] = useState("");

    const [desc, setdesc] = useState("");

    const [wordcount_title, setwordcount_title] = useState(0)

    const [wordcount_desc, setwordcount_desc] = useState(0)



    const changeHandler = (e) => {

        const limit = 50;
        settitle(e.target.value.slice(0, limit));


    }



    const changeHandler_desc = (e) => {

        const limit = 300;
        setdesc(e.target.value.slice(0, limit));
    }

    useEffect(() => {
        // array of words
        setwordcount_title(title.length);



        setwordcount_desc(desc.length);







    }, [title][desc]);


    //  //  //  //  //




    const [basic_name, setbasic_name] = useState("");

    const [standard_name, setstandard_name] = useState("");

    const [premium_name, setpremium_name] = useState("");

    const [basic_category, setbasic_category] = useState([]);

    const [standard_category, setstandard_category] = useState([]);


    const [premium_category, setpremium_category] = useState([]);




    // handling price and Project delivery time


    const initialValues = {

        Basic_price: '',
        Basic_time: '',




        Standard_price: '',
        Standard_time: '',



        Premium_price: '',
        Premium_time: '',



        Extra_1_service: '',
        Extra_1_price: '',
        Extra_1_time: '',


        Extra_2_service: '',
        Extra_2_price: '',
        Extra_2_time: '',



        Extra_3_service: '',
        Extra_3_price: '',
        Extra_3_time: '',


    }



    const { values, handleBlur,  handleSubmit, errors, touched } = useFormik({
        initialValues,
        // validationSchema: signUpSchema,

        onSubmit: (values, Action) => {
            console.log(values);
            Action.resetForm();
        }
    });


    //  // /// /// /// /// ///



    //  for basic packages

    const handleDelete_basic = (basic_category) => () => {
        setbasic_category((chips) => chips.filter((chip) => chip.id !== basic_category.id));
    };

    //   for standard packages

    const handleDelete_standard = (standard_category) => () => {

        setstandard_category((chips) =>
            chips.filter((chip) =>
                chip.id !== standard_category.id));

    };


    const handleDelete_premium = (premium_category) => () => {

        setpremium_category((chips) =>
            chips.filter((chip) =>
                chip.id !== premium_category.id));

    };







    return (
        <>
            <hr />

            {
                console.log(basic_category)


            }
            {
                console.log(standard_category)


            }
            {
                console.log(premium_category)


            }

            <div className="packages_section">
                Packages
            </div>

            <hr />


            <section className='package_section'>




                {/* basic section */}







                <div className="package_heading">
                    Basic
                </div>
                <div className="package_heading_desc">
                    Tell us the basic packages that you provide
                </div>


                <form onSubmit={handleSubmit} className='profile_information_1'>


                    <div className="Profile_info_basic">



                        <div className="fst_package_section_1">



                            <label htmlFor="Services" className='services'>Services *</label>

                            <div className="input_cover">

                                <input type="text" placeholder='Type services (E.G. Traditional Photography)' value={basic_name}

                                    onChange={e => setbasic_name(e.target.value)}

                                />



                                <button



                                    onClick={(e) => {
                                        e.preventDefault();

                                        if (basic_name.trim().length == 0) {
                                            alert('invalid input ');

                                        } else {



                                            setbasic_name(" ");
                                            setbasic_category([
                                                ...basic_category,
                                                {
                                                    id: basic_category.length + 1,
                                                    name: basic_name
                                                }
                                            ]);
                                        }
                                    }}
                                >Add</button>

                            </div>


                        </div>






                        <div className='selected_category'>

                            <ul>
                                {basic_category.map(cat => (

                                    <li
                                        key={cat.id}>

                                        <Chip

                                            label={cat.name}
                                            onDelete={cat.label === ' ' ? undefined : handleDelete_basic(cat)}
                                        />



                                    </li>


                                ))}
                            </ul>
                        </div>






                        <div className="fst_package_section_2">



                            <label htmlFor="Services" className='set_price'>Set Price *</label>

                            <div className="input_cover">
                                <input type="text" required='required' name='Basic_price'
                                      onChange={(e)=>setData({...data,basic_price:e.target.value})}
                                      value={data.basic_price} 
                                    values={values.Basic_price}
                                    onBlur={handleBlur}
                                    placeholder='Enter the price for basic package' />



                            </div>





                        </div>






                        <div className="fst_package_section_3">



                            <label htmlFor="Services " className='delivery_time'>Project delivery time *</label>

                            <div className="input_cover">
                                <input type="text"
                                    name='Basic_time'
                                    onChange={(e)=>setData({...data,basic_time:e.target.value})} 
                                    value={data.basic_time}
                                    values={values.Basic_time}
                                    onBlur={handleBlur}
                                    placeholder='Enter the delivery time of project (E.G. 1 Week)' />

                            </div>





                        </div>





                    </div>


                    <hr />





































                    {/* standard section */}



                    <div className="package_heading_standard">
                        Standard
                    </div>


                    <div className="package_heading_desc">
                        Tell us the standard packages that you provide
                    </div>








                    <div className="Profile_info_standard">



                        <div className="fst_package_section_1">



                            <label htmlFor="Services" className='services'>Services *</label>

                            <div className="input_cover">
                                <input type="text" placeholder='Type services (E.G. Traditional Photography)' value={standard_name}
                                    onChange={e => setstandard_name(e.target.value)}
                                />

                                <button onClick={(e) => {
                                    e.preventDefault();

                                    if (standard_name.trim().length == 0) {
                                        alert('invald input');
                                    }
                                    else {
                                        setstandard_name(" ");
                                        setstandard_category([
                                            ...standard_category,
                                            {
                                                id: standard_category.length + 1,
                                                name: standard_name
                                            }
                                        ]);
                                    }
                                }}



                                >Add</button>

                            </div>

                        </div>





                        <div className='selected_category'>

                            <ul>
                                {standard_category.map(cat => (

                                    <li
                                        key={cat.id}>

                                        <Chip

                                            label={cat.name}
                                            onDelete={cat.label === ' ' ? undefined : handleDelete_standard(cat)}
                                        />



                                    </li>


                                ))}
                            </ul>
                        </div>





                        <div className="fst_package_section_2">



                            <label htmlFor="Services" className='set_price'>Set Price *</label>

                            <div className="input_cover">
                                <input type="text"

                                   onChange={(e)=>setData({...data,standard_price:e.target.value})} 
                                    value={data.standard_price}
                                    values={values.Standard_price}
                                    onBlur={handleBlur}
                                    name='Standard_price'
                                    placeholder='Enter the price for standard package' />

                            </div>





                        </div>






                        <div className="fst_package_section_3">



                            <label htmlFor="Services " className='delivery_time'>Project delivery time *</label>

                            <div className="input_cover">
                                <input type="text"
                                      onChange={(e)=>setData({...data,standard_time:e.target.value})} 
                                      value={data.standard_time}
                                    values={values.Standard_time}
                                    onBlur={handleBlur}
                                    name='Standard_time'
                                    placeholder='Enter the delivery time of project (E.G. 1 Week)' />

                            </div>





                        </div>





                    </div>


                    <hr />













                    {/* Premium Section */}












                    <div className="package_heading_premium">
                        Premium
                    </div>


                    <div className="package_heading_desc">
                        Tell us the premium packages that you provide
                    </div>








                    <div className="Profile_info_premium">



                        <div className="fst_package_section_1">



                            <label htmlFor="Services" className='services'>Services *</label>

                            <div className="input_cover">
                                <input type="text" placeholder='Type services (E.G. Traditional Photography)' value={premium_name}
                                    onChange={e => setpremium_name(e.target.value)} />

                                <button onClick={(e) => {
                                    e.preventDefault();

                                    if (premium_name.trim().length == 0) {

                                        alert('invalid input ');

                                    } else {

                                        setpremium_name(" ");
                                        setpremium_category([
                                            ...premium_category,
                                            {
                                                id: premium_category.length + 1,
                                                name: premium_name
                                            }
                                        ]);

                                    }
                                }}

                                >Add</button>

                            </div>

                        </div>



                        <div className='selected_category'>

                            <ul>
                                {premium_category.map(cat => (

                                    <li
                                        key={cat.id}>

                                        <Chip

                                            label={cat.name}
                                            onDelete={cat.label === ' ' ? undefined : handleDelete_premium(cat)}
                                        />



                                    </li>


                                ))}
                            </ul>
                        </div>





                        <div className="fst_package_section_2">



                            <label htmlFor="Services" className='set_price'>Set Price *</label>

                            <div className="input_cover">
                                <input type="text"
                                      onChange={(e)=>setData({...data,pre_price:e.target.value})} 
                                      value={data.pre_price}
                                    values={values.Premium_price}
                                    onBlur={handleBlur}
                                    name='Premium_price'
                                    placeholder='Enter the price for premium package' />

                            </div>





                        </div>






                        <div className="fst_package_section_3">



                            <label htmlFor="Services " className='delivery_time'>Project delivery time *</label>

                            <div className="input_cover">
                                <input type="text"
                                      onChange={(e)=>setData({...data,pre_time:e.target.value})} 
                                      value={data.pre_time}
                                    values={values.Premium_time}
                                    onBlur={handleBlur}
                                    name='Premium_time'
                                    placeholder='Enter the delivery time of project (E.G. 1 Week)' />

                            </div>





                        </div>





                    </div>


                    <hr />









                    {/* Extra Packages */}














                    <List
                        sx={{ width: '70%', maxWidth: '70%', margin: '0 auto', bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"

                    >


                        <ListItemButton onClick={handleClick}>

                            <ListItemText className='main_personal_form_cat' primary="Add Extra Packages" />
                            {open ? <ExpandMore /> : <ExpandLess />}
                        </ListItemButton>
                        <Collapse in={!open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>





                                <div className="package_heading_premium">
                                    Add Extra Packages
                                </div>


                                <div className="package_heading_desc">
                                    You can add extra packages that you provide
                                </div>








                                <div className="Profile_info_premium">



                                    <div className="fst_package_section_1">



                                        <label htmlFor="Services" className='services'>Services *</label>

                                        <div className="input_cover">
                                            <input type="text" placeholder='Type services (E.G. Traditional Photography)' name='Extra_1_service'


                                                values={values.Extra_1_service}
                                                onBlur={handleBlur}
                                                
                                            />




                                        </div>

                                    </div>









                                    <div className="fst_package_section_2">



                                        <label htmlFor="Services" className='set_price'>Set Price *</label>

                                        <div className="input_cover">
                                            <input type="text"
                                                name='Extra_1_price'
                                                values={values.Extra_1_price}
                                                onBlur={handleBlur}
                                                
                                                placeholder='Enter the price for extra package' />

                                        </div>





                                    </div>






                                    <div className="fst_package_section_3">



                                        <label htmlFor="Services " className='delivery_time'>Project delivery time *</label>

                                        <div className="input_cover">
                                            <input type="text"
                                                name='Extra_1_time'
                                                values={values.Extra_1_time}
                                                onBlur={handleBlur}
                                                
                                                placeholder='Enter the delivery time of project (E.G. 1 Week)' />

                                        </div>





                                    </div>





                                </div>


                                <hr />









                            </List>
                        </Collapse>

                    </List>



                    <hr />






                    {/* gig section */}






                    <div className="fst_package_section_4">



                        <label htmlFor="Services " className='delivery_time'>Gig Title</label>

                        <div className="input_cover">

                            <textarea name="" id="" rows="4"


                                // value={title}
                                onChange={(e)=>setData({...data,gig_title:e.target.value})} 
                                value={data.gig_title}

                                placeholder='I will do something i am really good at (e.g. I will do beautiful wedding photography professionally)' >


                            </textarea>


                        </div>


                    </div>
                    {/* <span>word limit 50</span> */}



                    <span className='word_limit'>word limit {wordcount_title}/50</span>
                    <hr />















                    {/* gig desc */}








                    <div className="fst_package_section_5">



                        <label htmlFor="Services " className='delivery_time'>Gig Description*</label>

                        <div className="input_cover">

                            <textarea name="" id="" rows="4"

                                // value={desc}
                                onChange={(e)=>setData({...data,gig_desc:e.target.value})} 
                                value={data.gig_desc}

                                placeholder='Give a detail description of yourself !!!' >


                            </textarea>
                            {/* <span>word limit 300</span> */}

                        </div>

                    </div>



                    <span className='word_limit'>word limit {wordcount_desc}/300</span>







                    {/* <div className="submit_btn">
                        <button type='submit' >
                            Save And Continue
                        </button>
                    </div>
 */}


                   
                    <hr />




                </form>

            </section>


        </>
    )
}

export default Form_3