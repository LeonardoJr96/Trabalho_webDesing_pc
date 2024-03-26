@Component({
    selector: 'quest3',
    templateUrl: './component.quest3.html',
    styleUrls: ['./component.quest3.css']
  })
  export class BigCardComponent {
  
    @Input()
    photoCover =""
  
    @Input()
    cardTitle =""
    
    @Input()
    cardDescription =""
  
    @Input()
    Id ="0"
  
    constructor() { }
  
    ngOnInit() {
    }
  
  }
  