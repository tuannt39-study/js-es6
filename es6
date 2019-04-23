
ECMAScript 2015 - ES6

- Block Scoped: Định nghĩa biến với từ khóa let, cách định nghĩa này thì biến chỉ tồn tại trong phạm vi khối của nó (Block Scope)
- Destructuring Assignments: Bạn có thể khởi tạo các biến từ một mảng  bằng một dòng code đơn giản.
- Default Parameters: Bạn có thể gán giá trị mặc định cho các tham số.
- Rest Parameter: Tham số không giới hạn
- Arrow function: Bạn có thể tạo hàm bằng cách sử dụng dấu mũi tên =>.
- Template String: Tạo templaet HTML cực kì đơn giản
- Weak, Set: các kiểu dữ liệu phức tạp mới
- Iterables và iterators 
- Class, import

* ES6 - Block Scoped

- var: Khai báo ngoài hàm là biến toàn cục, khai báo trong hàm là biến cục bộ
- let: Tồn tại bên trong khối {} khai báo (block scoped)
Thường dùng để khai báo các biến mang tính chất tạm thời.

* ES6 - Arrow Function

- Ta thường sử dụng 2 cách sau để khởi tạo một function:
    function name (var1, var2) {
        
    };

    var name = function(var1, var2) {

    };

- Sử dụng arrow function:

+ Cú pháp căn bản:
    var name = (var1, var2) => {

    };

+ Ví dụ:
    var hello = (name, message) => {
        console.log('Chào ' + name + ', bạn là ' + message);
    };
    hello ('tuannt', 'hihi');
    
+ Trường hợp trong thân của function chỉ có một lệnh duy nhất:
    var hello = (name, message) => console.log('Chào ' + name + ', bạn là ' + message);
    hello ('tuannt', 'hihi');

+ Trường hợp một tham số:
    var hello = message => console.log(message);
    hello('hihi);

+ Trường hợp không có tham số:
    var hello = () => console.log('hihi');
    hello();

- Một số ví dụ arrow function:

+ Ví dụ với MAP:
    var domains = ['hi', 'he', 'ho'];
    domains.map(function (val, key) {
        console.log(val.toUpperCase());

        // Lưu lại
        domains[key] = val.toUpperCase();
    });
    console.log(domains);

    Sử dụng Arrow Function:
    var domains = ['hi', 'he', 'ho'];
    domains.map((val, key) => {
        console.log(val.toUpperCase());
    });
    console.log(domains);

+ Ví dụ với setTimeout;
    setTimeout(() => {
        console.log('hi');
    }, 3000);

- Khắc phục nhược điểm với this trong closure function:
+ Ví dụ ES5:
    var blog = {
        domain : "sapo.vn",
        showWebsite : function (callbackFunction){
            callbackFunction();
        },
        render : function(){
            this.showWebsite(function (){
                console.log(this.domain); // this chính là blog
            }.bind(this)); // phải sử dụng hàm bind thì đối tượng this mới chính là blog
        }
    };
    
    blog.render();

+ Ví dụ ES6:
    var blog = {
        domain : "sapo.vn",
        showWebsite : function (callbackFunction){
            callbackFunction();
        },
        render : function(){
            this.showWebsite((() => {
                console.log(this.domain); // this chính là blog
            }));
        }
    };
    
    blog.render();

* ES6 - Destructuring Assignments

- Tách các phần tử của Array, Object thành nhiều biến.

- Array:
    let date = [04, 22, 2019];
    let [m, d, y] = date;
    console.log('Day: ' + d);
    console.log('Month: ' + m);
    console.log('Year: ' + y);

    let [, , y1] = date;
    console.log('Year: ' + y1);

- Object:
    let date = {
        day: 22,
        month: 4,
        year: 2019
    }
    let (day: d, month: m, year: y) = date;
    console.log('Day: ' + d);
    console.log('Month: ' + m);
    console.log('Year: ' + y);

    let (year: y1) = date;
    console.log('Year: ' + y1);

* ES6 - Default Parameters

- Default Parameter là giá trị mặc định của tham số khi truyền vào các function.

- Giá trị mặc định trong ES5:
    function sayHello (domain) {
        domain = domain || 'sapo.vn';
        return domain;
    };
    console.log('Không truyền tham số: ' + sayHello());
    console.log('Có truyền tham số: ' + sayHello('SAPO'));

- Giá trị mặc định trong ES6:
    function sayHello(domain = 'sapo.vn') {
        return domain;
    };
    console.log('Không truyền tham số: ' + sayHello());
    console.log('Có truyền tham số: ' + sayHello('SAPO'));

* ES6 - Rest Parameters

- Khai báo một hàm với số lượng tham số không xác định
    let domainList = (a, b, c, d, ...z) => {
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(z);
    }
    domainList('a', 'b', 'c', 'd', 'e', 'f');

* ES6 - Hằng số Const

- Không thể thay đổi giá trị cho biến khi khai báo const, giống với let nó là block scoped.
    const info = {
        name : "Hi",
        domain : "Ho"
    };
    console.log(info);

* ES6 - Collection Sets

- Set trong ES6:
Khởi tạo: let set = new Set();
Thêm phần tử: set.add(value);
Xóa phần tử: set.delete(value);
Kiểm tra tồn tại giá trị: set.has(value);
Đếm tổng số phần tử: set.size;
Xóa toàn bộ phần tử: set.clear();

- Sử dụng vòng lặp với Set:
    let numbers = new Set([1,2,3,4,5,6]);
    for (let number of numbers) {
        console.log(number);
    }

- Chuyển đổi Set sang Array:
    let numbers = new Set([1,2,3,4,5,6]);
    let arr_numbers = [...numbrers];
    let set_numbers = new Set(arr_numbers);

- Mapping và Filter:
    let numbers = new Set([1,2,3,4,5,6]);
    let arrFilter = [...numbers].filter(function(x) {
        return (x%2) == 0;
    });
    console.log(numbers);
    console.log(arrFilter);
    let arrMap = [...numbers].map(function(x) {
        return x*2;
    });
    console.log(numbers);
    console.log(arrMap);

* ES6 - Collection Maps

- Map trong ES6:
Khởi tạo: let map = new Map()
Thêm phần tử: map.set(key, value);
Xóa phần tử: map.delete(key);
Kiểm tra phần tử tồn tại: map.has(key)
Đếm tổng số phần tử: map.size
Xóa toàn bộ phần tử: map.clear();

- Sử dụng vòng lặp với Map:
    let map = new Map([
        ['name' , 'hi'],
        ['domain', 'sapo.vn']
    ]);
    for (let key of map.keys()) {
        console.log(key);
    }
    for (let value of map.values()) {
        console.log(value);
    }
    for (let entry of map.entries()) {
        console.log(entry[0] + ' - ' + entry[1]);
    }
    for (var [key, value] of map) {
        console.log(key + ' - ' + value);
    }
    map.forEach((value, key) => {
        console.log(key + ' - ' + value);
    });

- Mapping và Filter:
    let map = new Map()
    .set(1, 'a')
    .set(2, 'b')
    .set(3, 'c')
    .set(4, 'd')
    .set(5, 'e');
    let mapFilter = new Map( [...map].filter(([key, value]) => key % 2 == 0 ) );
    console.log(map);
    console.log(mapFilter);
    let mapMap = new Map([...map].map(([key, value]) => [key, key + '-' + value]));
    console.log(map);
    console.log(mapMap);

* ES6 - Collection WeakMap

- WeakMap trong ES6 tương tự như Map, nhưng key truyền vào phải là một Object (Class, Function, Object).
    var weak = new WeakMap();
    var key1 = {};
    var key2 = {};
    weak.set(key1, "Giá trị 01");
    weak.set(key2, "Giá trị 02");
    console.log(weak.get(key1));
    console.log(weak.get(key2));
    var other_key = {};
    console.log(weak.has(key1));
    console.log(weak.has(other_key));
    weak.delete(key1);
    console.log(weak.get(key1));

* ES6 - Collection WeakSet

- WeakSet trong ES6 tương tự như Set, nhưng key truyền vào phải là một Object (Class, Function, Object).
    var weak = new WeakSet();
    var key1 = {
        name : "hi"
    };
    var key2 = {
        website: "saop.vn"
    };
    weak.add(key1);
    weak.add(key2);
    var other_key = {};
    console.log(weak.has(key1));
    console.log(weak.has(other_key));
    weak.delete(key1);

* ES6 - Symbol

- Symbol là kiểu dữ liệu primitive type, nó sẽ tạo ra các ký tự duy nhất (unique), chỉ là một dạng object.
    let symbol1 = Symbol();
    let symbol2 = Symbol('Hi');
    console.log(typeof symbol1);

    const MY_KEY = Symbol();
    let obj = {
        [MY_KEY]: 123
    };
    console.log(obj[MY_KEY]);

    let map = new Map();
    map.set(MY_KEY, 'sapo.vn');
    console.log([...map]);

- Chuyển kiểu:
    var sym = Symbol();
    sym1 = Boolean(sym);
    sym2 = Number(sym);
    sym3 = String(sym);

    var sym11 = Symbol('sapo.vn');
    var sym12 = Symbol('sapo.vn');
    var sym11_new = String(sym11);
    var sym12_new = String(sym12);

* ES6 - HTML Template String

- Template String trong ES6:
    let dm = 'sapo.vn';
    let tp = `hello ${dm}`;

    var domains = [
        'hi.net',
        'ho.com',
        'ha.com'
    ];
    domains.map(function(domain, key){
        console.log(`<h1>${domain}</h1>`);
    });

    var domains = [
        {
            domain : "hi.net",
            author: "ntv"
        },
        {
            domain : "ho.com",
            author: "gbr"
        }
    ];
    domains.map(function(domain, key){
        var tmpl = `
            <div>
                <h1>${domain.domain}</h1>
                <h2>${domain.author}</h2>
            </div>
        `;
        console.log(tmpl);
    });

* ES6 - Synchronous và Asynchronous

- Synchronous trong ES6:
Nó có nghĩa là xử lý đồng bộ. Chương trình sẽ chạy từng bước và chỉ khi bước 1 thực hiện xong thì mới nhảy sang bước 2.

- Mặt tốt của Synchronous:
Chương trình chạy đúng thứ tự và có nguyễn tắc nên sẽ không mặc phải các lỗi về tiến trình không cần thiết.

- Mặt xấu của Synchronous:
Chương trình chạy theo thứ tự đồng bộ nên sẽ sinh ra trạng thái chờ không cần thiết trong một số trường hợp.


- Asynchronous trong ES6:
Nó có nghĩa là xử lý bất đồng bộ. Chương trình có thể nhảy đi, bỏ qua 1 bước nào đó.

- Mặt tốt của Asynchronous:
Có thể xử lý nhiều công việc 1 lúc mà không phải chờ đợi, tạo nên cảm giác thoải mái.

- Mặt xấy của Asynchronous:
Nếu một chương trình đòi hỏi phải có quy trình thì bạn không thể sử dụng Asynchronous được.

- Ajax Asynchronous:
Ajax: Asynchronous JavaScript and XML là một kỹ thuật xử lý bất đồng bộ.
setTimeout() cũng là một hàm xử lý bất đồng bộ.

* ES6 - Promise

- Xử lý đồng bộ trong javascript:

+ JavaScript là đơn  luồng:
JavaScript là ngôn ngữ chạy một luồng duy nhất, tuân thủ theo nguyên tắc hoạt động đồng bộ.

+ Sự kiện đa luồng:

- Promise trong JavaScript - ES6:
Sinh ra để xử lý kết quả của một hành động cụ thể, kết quả hành động sẽ là thành công hoặc thất bại. Hành động gọi lại callback action.

+ 3 trạng thái của promise:
Fulfilled: Hành động xử lý xong và thành công
Rejected: Hành động xử lý xong và thất bại
Pending: Hành động đang chờ xử lý hoặc bị từ chối

+ Tạo một Promise:
    var promise = new Promise(callback);
    var promise = new Promise(function(resolve, reject){
        
    });
resolve là một hàm xử lý cho hành động thành công.
reject là một hàm xử lý cho hành động thất bại.

+ Thenable trong Promise:
    var promise = new Promise(function(resolve, reject){
        resolve('Success');
        // OR
        reject('Error');
    });

    promise.then(
        function(success){
            // Success
        }, 
        function(error){
            // Error
        }
    );

    // Demo Resolve
    var promise = new Promise(function(resolve, reject){
        resolve('Success!');
    });
    
    
    promise.then(
        function(success){
            console.log(success);
        }
    );

    // Demo Reject
    var promise = new Promise(function(resolve, reject){
        reject('Error!');
    });
    
    
    promise.then(
        function(success){
            console.log(success);
        },
        function(error){
            console.log(error);
        }
    );

+ Catch trong Promise:
    promise.then().catch();

    var promise = new Promise(function(resolve, reject){
        reject('Error!');
    });
    
    
    promise
        .then(function(message){
            console.log(message);
        })
        .catch(function(message){
            console.log(message);
        });

Vừa truyền callback error và vừa sử dụng catch: Thì chương trình sẽ chạy hàm callback error mà không chạy catch:
    var promise = new Promise(function(resolve, reject){
        reject('Error!');
    });
    
    
    promise
        .then(function(message){
            console.log(message);
        }, function(message){
            console.log('Callback Error!');
            console.log(message);
        })
        .catch(function(message){
            console.log('Catch!');
            console.log(message);
        });

+ Thenable liên tiếp

    var promise = new Promise(function(resolve, reject){
        resolve();
    });
    
    promise.then(function(){
            console.log(1);
        })
        .then(function(){
            console.log(2);
        })
        .then(function(){
            console.log(3);
        });
    -> 1, 2 , 3

    var promise = new Promise(function(resolve, reject){
        reject();
        });

    promise.then(function(){
            console.log(1);
        })
        .then(function(){
            console.log(2);
        }, function(){
            console.log('Error!')
        })
        .then(function(){
            console.log(3);
        });
    -> Error!, 3

    var promise = new Promise(function(resolve, reject){
        reject();
    });
    
    promise.then(function(){
            console.log(1);
        })
        .then(function(){
            console.log(2);
        })
        .then(function(){
            console.log(3);
        })
        .catch(function(){
            console.log('Error!')
        });
    -> Error!

    var promise = new Promise(function(resolve, reject){
        resolve();
    });
    
    promise
    .then(function(){
        return new Promise(function(resolve, reject){
            reject();
        });
    })
    .then(function(){
        console.log('Success!');
    })
    .catch(function(){
        console.log('Error!');
    });
    -> Error!

* ES6 - Iterables và iterators

- Iterators
là một bộ duyệt để duyệt qua một mảng, một danh sách, một collection mà qua mỗi lần duyệt sẽ ghi lại vị trí đã duyệt từ đó có thể biết và lấy vị trí tiếp theo.
    let arr = ['a', 'b', 'c'];
    var iterator = arr[Symbol.iterator]();
    console.log(iterator.next());   // a
    console.log(iterator.next());   // b
    console.log(iterator.next());   // c
    console.log(iterator.next());   // undefined

- Iterable
là khả năng cho phép các đối tượng trong javascript sử dụng các kỹ thuật xử lý dữ liệu như for of loop, toán tử ba chấm ...
    var array = [1, 2, 3, 4];
    for (let x of array) {
        console.log(x);
    }
    console.log(...array);

Trong ES6 thì các đối tượng như Array, Map, Set, WeakMap, WeakSet, Object đều là đối tượng iterable

- Iterator Protocal
là các giao thức (method) xử lý một đối tượng có đánh dấu vị trí đã duyệt.
    // Mảng nguyên thủy
    let arr = ['a', 'b', 'c'];
    // Chuyển sang Iterable
    var iterable = arr[Symbol.iterator]();
    // Sử dụng các Iterator Protocol để chuyển qua các phần tử
    console.log(iterable.next());   // a
    console.log(iterable.next());   // b
    console.log(iterable.next());   // c
    console.log(iterable.next());   // undefined

- Iteable và Iterator

+ Array
    var array = ['a', 'b', 'c'];
    console.log('***** Lặp qua các phần tử *****');
    for (let x array) {
        console.log(x);
    }
    console.log('***** Sử dụng next *****');
    var iterable = array[Symbol.iterator]();
    console.log(iterable.next());
    console.log(iterable.next());
    console.log(iterable.next());
    console.log(iterable.next());

+ Map
    let map = new Map().set('a', 1).set('b', 2);
    console.log('***** Lặp qua các phần tử *****');
    for (let pair of map) {
        console.log(pair);
    }
    console.log('***** Sử dụng next *****');
    let iterable = map[Symbol.iterator]();
    console.log(iterable.next());
    console.log(iterable.next());
    console.log(iterable.next());

+ Set
    let set = new Set().add('a').add('b');
    console.log('***** Lặp qua các phần tử *****');
    for (let x of set) {
        console.log(x);
    }
    console.log('***** Sử dụng next *****');
    var iterable = set[Symbol.iterator]();
    console.log(iterable.next());
    console.log(iterable.next());
    console.log(iterable.next());

+ Arguments
Tổng các tham số truyền vào mảng
    function printArgs() {
        console.log('***** Lặp qua các phần tử *****');
        for (let x of arguments) {
            console.log(x);
        }
        console.log('***** Sử dụng next *****');
        var iterable = arguments[Symbol.iterator]();
        console.log(iterable.next());
        console.log(iterable.next());
        console.log(iterable.next());
    }
    
    // Sử dụng
    printArgs('a', 'b');

+ Toán tử ...

Array
    var array = ['a', 'b', 'c'];
    console.log('Liệt kê');
    console.log(...array); // a b c
    console.log('Bổ sung');
    var new_arr = [...array, 'd', 'e'];
    console.log(...new_arr); // a b c d e

Map
    console.log('Liệt kê');
    let map = new Map().set('a', 1).set('b', 2);
    console.log(...map);
    console.log('Bổ sung');
    let new_map = new Map([...map]).set('d', 3).set('e', 4);
    console.log(...new_map);

Set
    console.log('Liệt kê');
    let set = new Set().add('a').add('b');
    console.log(...set);
    console.log('Bổ sung');
    let new_set = new Set([...set]).add('c').add('d');
    console.log(...new_set);

