import { Badge, Group, Text } from "@mantine/core";
import ReusableButton from "../buttons/ReusableButton";
import { useEffect, useState } from "react";
import { IconCheck } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";

interface DataProps {
  id: number;
  name: string;
  age: number;
}

const ListPage = () => {
  const [data, setData] = useState<DataProps[]>([]);

  //Adapter Pattern
  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/api/get");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //Observer Pattern
  const handleAdd = () => {
    notifications.show({
      title: "Added a user!",
      message: "I added a user!",
      color: "green",
    });
  };

  const handleDelete = () => {
    notifications.show({
      title: "Deleted a user!",
      message: "I deleted a user!",
      color: "red",
    });
  };

  //Strategy Pattern
  const filterDataByName = (name: string) => {
    return data.filter((item) => item.name.includes(name));
  };

  const filterDataByAge = (age: number) => {
    return data.filter((item) => item.age > age);
  };

  return (
    <div>
      <h1>List</h1>

      {filterDataByName("John").map((item) => {
        return (
          <Group justify="center">
            <Text>{item.name}</Text>
            {/* Decorator Pattern */}
            <Badge color="green" size="md" circle>
              <IconCheck size={16} />
            </Badge>
          </Group>
        );
      })}
      {filterDataByAge(30).map((item) => {
        return (
          <Group justify="center">
            <Text>{item.name}</Text>
            <Badge color="red" size="md" circle>
              <IconCheck size={16} />
            </Badge>
          </Group>
        );
      })}
      <Group>
        <ReusableButton
          variant="primary"
          size="small"
          color="blue"
          onClick={handleAdd}
        >
          Add
        </ReusableButton>
        <ReusableButton size="large" color="red" onClick={handleDelete}>
          Delete
        </ReusableButton>
      </Group>
    </div>
  );
};

export default ListPage;
