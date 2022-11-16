/* eslint-disable no-unused-vars */

const todoList = () => {
  var all = [];
  var date;
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  let todayDate = new Date().toISOString().split("T")[0];

  const overdue = () => {
    // Write the date check condition here and return the array of overdue items accordingly.
    // FILL YOUR CODE HERE
    return all.filter((item) => {
      return item.dueDate < todayDate;
    });
  };

  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    // FILL YOUR CODE HERE
    return all.filter((item) => {
      return item.dueDate == todayDate;
    });
  };

  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // FILL YOUR CODE HERE
    return all.filter((item) => {
      return item.dueDate > todayDate;
    });
  };

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    // FILL YOUR CODE HERE
    return list
      .map((item) => {
        var status;
        if (item.completed) {
          status = "[x]";
        } else {
          status = "[ ]";
        }
        if (item.dueDate == todayDate) {
          date = "";
        } else {
          date = item.dueDate;
        }
        return status + " " + item.title + " " + date;
      })
      .join("\n");
    // return OUTPUT_STRING
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

const todos = todoList();

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();

const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);

module.exports = todoList;
