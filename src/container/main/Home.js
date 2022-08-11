import React, { useState } from "react";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { useModal } from "mui-modal-provider";

import { useGetContacts } from "react-query/queries";

import AddContactModal from "./AddContactModal";
import UserTable from "./table/UserTable";

const Main = () => {
  // const [open, setOpen] = useState(false);
  // const [openEdit, setOpenEdit] = useState(false);
  // const [id, setId] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const userData = useGetContacts({ page, pageSize });
  const { showModal } = useModal();

  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  // const handleOpenEdit = (id) => {
  //     setId(id);
  //     setOpenEdit(true);
  // };
  // const handleCloseEdit = () => setOpenEdit(false);

  return (
    <>
      <Stack spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Stack direction="row" spacing={2} mb={2}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "primary.main",
                  maxWidth: "auto",
                }}
                // onClick={handleOpen}
                onClick={() => showModal(AddContactModal)}
              >
                Add Contact
              </Button>
            </Stack>
            <UserTable
              // handleOpen={handleOpenEdit}
              userData={userData}
              meta={{ page, pageSize }}
            />
          </Paper>
        </Grid>
      </Stack>
      {/* {open && <AddUserModal handleClose={handleClose} />}
            {id && openEdit && <EditUserModal id={id} handleClose={handleCloseEdit} />} */}
    </>
  );
};

export default Main;
