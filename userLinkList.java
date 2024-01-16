import java.util.ArrayList;

class User {
    private String name;
    private String email;
    private String dob;
    private String profession;

    public User(String name, String email, String dob, String profession) {
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.profession = profession;
    }

    // Getters and setters (optional)
    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getDob() {
        return dob;
    }

    public String getProfession() {
        return profession;
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", dob='" + dob + '\'' +
                ", profession='" + profession + '\'' +
                '}';
    }
}

class Node {
    User user;
    Node next;
    public Node(User user){
        this.user = user;
        this.next = null;
    }
}


class LinkedList {
    Node head;
    public LinkedList(){
        this.head = null;
    }
    
    public void append(User user){
        Node newUserNode = new Node(user);
        if(this.head == null){
            this.head = newUserNode;
        }else {
            Node current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = newUserNode;
        }
    }
    
    public void print(){
        Node currentUser = this.head;
        while(currentUser != null){
            System.out.print(currentUser.user + " ");
            currentUser = currentUser.next;
        }
        System.out.println();
    }
}


class UserListExample {
    public static void main(String[] args) {
        

       LinkedList ll = new LinkedList();
       ll.append(new User("John Doe", "john@example.com", "1990-01-01", "Engineer"));
       
       
       ll.append(new User("Jane Smith", "jane@example.com", "1985-05-15", "Doctor"));
       
       
       ll.print();
    }
}
