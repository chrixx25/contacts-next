import Grid from "@mui/material/Grid";

import Form from "@/component/Form";

const AddContact = (): React.ReactElement => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Form.TextField name="userName" label="Username" />
      </Grid>
      <Grid item xs={12}>
        <Form.TextField name="password" label="Password" type="password" />
      </Grid>
      <Grid item xs={12}>
        <Form.TextField name="firstName" label="First Name" />
      </Grid>
      <Grid item xs={12}>
        <Form.TextField name="lastName" label="Last Name" />
      </Grid>
      <Grid item xs={12}>
        <Form.TextField name="middleName" label="Middle Name" />
      </Grid>
      <Grid item xs={12}>
        <Form.TextField name="email" label="Email" />
      </Grid>
      <Grid item xs={12}>
        <Form.TextField name="mobileNo" label="Mobile No." />
      </Grid>
    </Grid>
  );
};

export default AddContact;
