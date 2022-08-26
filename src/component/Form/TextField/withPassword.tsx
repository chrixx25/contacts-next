import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { useToggle } from "react-use";

const withPassword = (WrappedComponent: React.ElementType): any => {
  const TextField = (props: any): any => {
    const { type, ...rest } = props;
    const [visible, toggleVisibility] = useToggle(false);

    if (type === "password") {
      return (
        <WrappedComponent
          {...rest}
          type={visible ? "text" : "password"}
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleVisibility}
                  onMouseDown={toggleVisibility}
                  edge="start"
                >
                  {visible ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      );
    }

    return <WrappedComponent type={type} {...props} />;
  };

  return TextField;
};

export default withPassword;
