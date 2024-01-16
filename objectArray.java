// Online Java Compiler
// Use this editor to write, compile and run your Java code online


class Person {
    private String name;
    private String proffessional;
    
    Person(String name, String proffessional){
        this.name = name;
        this.proffessional = proffessional;
    }
    
    public void displayStatus(){
        System.out.println("name: "+ this.name + " profession: "+ this.proffessional);
    }
}
class HelloWorld {
    public static void main(String[] args) {
        Person[] listToPrint;
        
        listToPrint = new Person[]{
            new Person("chhatra","fullstack"),
                new Person("xatra", "backend"),
                new Person("wolfie","CEH")
        };
            
            
            for(int i = 0; i < listToPrint.length; i++){
                listToPrint[i].displayStatus();
            }
    }
}