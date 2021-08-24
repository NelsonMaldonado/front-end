import React, {useState} from "react";

import Form_Item from "../component/form_item";

export default function Form_Listing_Item(props) {
  const [stateUserID, set_stateUserID] = useState(null);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Commodity Category</th>
            <th>Sub Category</th>
            <th>Commodity Product</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(props.input_arrayItems).map((object) => {
            return (
              <Form_Item
                input_object={object}
                input_cb_set_modifiedItem={props.input_cb_set_modifiedItem}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/*

return (
    <div>
      <label>Name</label>
      
    </div>

    {Array.from(props.input_arrayItems).map((object) => {
      return <Form_Item input_object={object} />;
    })}
      
  );

*/
