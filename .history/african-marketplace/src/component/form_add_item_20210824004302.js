import React, { useState, useEffect } from "react";
import * as yup from "yup";

export default function Form_Add_Item(props) {
  const initial_state = {
    input_text_name: "",
    input_number_quantity: "",
    input_text_description: "",
    input_text_commodity_category: "",
    input_text_sub_category: "",
    input_text_commodity_product: "",
  };
  const schema = yup.object().shape({
    
  });

  const [stateFormData, set_stateFormData] = useState(initial_state);

  const cb_onChange = (event) => {
    const { checked, value, name, type } = event.target;
    set_stateFormData({ ...stateFormData, [name]: value });
  };

  const cb_onSubmit = (event) => {
    //prevent default behavior
    event.preventDefault();
    //construct a new object
    const new_object = {
      name: stateFormData.input_text_name,
      quantity: stateFormData.input_number_quantity,
      description: stateFormData.input_text_description,
      commodity_category: stateFormData.input_text_commodity_category,
      sub_category: stateFormData.input_text_sub_category,
      commodity_product: stateFormData.input_text_commodity_product,
    };
    //return formData to the parent element
    props.input_cb_set_stateItem(new_object);
    //reset form
    set_stateFormData(initial_state);
  };

  return (
    <form class="flex-column" onSubmit={cb_onSubmit}>
      <label>
        Name:
        <input
          onChange={cb_onChange}
          name="input_text_name"
          id="input_text_name"
          value={stateFormData.input_text_name}
          type="text"
        />
      </label>
      <label>
        Quanity:
        <input
          onChange={cb_onChange}
          name="input_number_quantity"
          id="input_number_quantity"
          value={stateFormData.input_number_quantity}
          type="number"
          min="1"
        />
      </label>
      <label>
        Description:
        <input
          onChange={cb_onChange}
          name="input_text_description"
          id="input_text_description"
          value={stateFormData.input_text_description}
          type="text"
        />
      </label>
      <label>
        Commodity Category:
        <input
          onChange={cb_onChange}
          name="input_text_commodity_category"
          id="input_text_commodity_category"
          value={stateFormData.input_text_commodity_category}
          type="text"
        />
      </label>
      <label>
        Sub-Category:
        <input
          onChange={cb_onChange}
          name="input_text_sub_category"
          id="input_text_sub_category"
          value={stateFormData.input_text_sub_category}
          type="text"
        />
      </label>
      <label>
        Commodity Product:
        <input
          onChange={cb_onChange}
          name="input_text_commodity_product"
          id="input_text_commodity_product"
          value={stateFormData.input_text_commodity_product}
          type="text"
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
