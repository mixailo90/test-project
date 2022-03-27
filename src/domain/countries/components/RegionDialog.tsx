import { Dialog, DialogTitle, List, ListItem, ListItemText, ModalProps } from '@mui/material';

export interface RegionDialogProps {
  open: boolean;
  countries: string[];
  onClose: ModalProps['onClose'];
}

export const RegionDialog = (props: RegionDialogProps) => {
  const { countries, onClose, open } = props;

  return (
    <Dialog onClose={(event, reason) => onClose?.(event, reason)} open={open}>
      <DialogTitle>Countries in same region</DialogTitle>
      <List sx={{ pt: 0 }}>
        {countries.map((country) => (
          <ListItem key={country}>
            <ListItemText primary={country} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};
