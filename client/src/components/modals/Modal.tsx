import { Modal, Text, Group, Button } from "@mantine/core";
import { useEffect, useState } from "react";

interface TestModalProps {
  opened: boolean;
  onClose: () => void;
  title: string;
  size: string;
  centered: boolean;
  description: string;
  loading?: boolean;
  props?: any;
}

const TestModal = ({
  opened,
  onClose,
  title,
  size,
  centered,
  description,
  props,
}: TestModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsSubmitting(false);
    }, 5000);
  }, []);

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={title}
      size={size}
      centered={centered}
      {...props}
    >
      <Modal.Body>
        <Text>{description}</Text>
        <Text>{description}</Text>
        <Text>{description}</Text>
      </Modal.Body>
      <Group justify="space-around">
        <Button color="red">Cancel</Button>
        <Button
          color="green"
          loading={isSubmitting}
          onClick={() => {
            setIsSubmitting(true);
          }}
        >
          Submit
        </Button>
      </Group>
    </Modal>
  );
};

// setIsLoading(true)

// axios.get('link').then((data) => {
//   setData(data)
// }).then(() => {
//   setIsLoading(false)
// })


// const {data, isloading, error, invalidate} = useQuery(
//   fetch('link')
// )


// const app = Express()

// app.use('/link', (req, res) => {
//   res.send('Hello World')
// })

// app.listen(3000, () => {
//   console.log('Server is running on port 3000')
// })

// const router = express.Router()


// router.get('/link', (req, res) => {
//   res.send('Hello World')
// })

export default TestModal;
