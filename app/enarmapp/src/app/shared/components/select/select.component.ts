import { Component, EventEmitter, Input, Output } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'enarm-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: SelectComponent
    }
  ]
})
export class SelectComponent {
  subcatList: any = ["Cardiología", "Nefrología", "Infectología", "Neumología"]

  //selected: string = '';

  @Input() value = ''
  value2 = '';

  @Input() set setitems (items: any) {
    if(items){
      this.items = items
      this.itemsFiltered = [...this.items];
    }
  }
  @Input() items = [
    { value: 'Cardio', id: 1, selected: false },
    { value: 'Nefro', id: 1, selected: false },
    { value: 'Gastro', id: 1, selected: false },
    { value: 'Onco', id: 1, selected: false },
    { value: 'Hemato', id: 1, selected: false },
    { value: 'Infecto', id: 1, selected: false },
    { value: 'Neumo', id: 1, selected: false },
    { value: 'Reuma', id: 1, selected: false },
    { value: 'Endocrino', id: 1, selected: false },
    { value: 'Geria', id: 1, selected: false }]

  itemsFiltered = [...this.items];

  @Output() onSelected = new EventEmitter()
  isHidden = true
  @Input() placeholder = 'Seleccionar subtemas'

  @Input() multiple = true;

  touched = false;
  disabled = false;
  /* eslint-disable no-useless-constructor */
  constructor() {
  
  }

  writeValue(selected: any) {
  }

  onChange = (selected: any) => { };

  onTouched = () => {};

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }


  selected(item: any): void {
    console.log('item', item);
    
    this.markAsTouched();
    if(this.disabled) {
      return
    }
    if (this.multiple) {
      this.isMultiple(item)
    } else {
      this.value = item.value
      this.onSelected.emit(item)
      this.onChange(item);
      this.isHidden = true
    }

  }

  isMultiple(item: any) {
    item.selected = !item.selected
    if (item.selected == true) {
      //this.value = this.value.length === 0 ? item.value : item.value + ', ' + this.value; //AQUI LE MOVIMOS, no va el item.index, pero recibimos 5Cardiologia (Problema es que solo cuando es 2do seleccionado)
      this.value = this.value.length === 0 ? item.value : item.value + ', ' + this.value;
      this.value2 = this.value.length === 0 ? item.index : item.index + ", " + this.value2;
      const index = this.items.findIndex(x => x === item);
      this.items[index].selected = true;
    } else {
      const valueArray = this.value.split(', ')
      const indexItem = valueArray.findIndex(x => x === item.value)
      valueArray.splice(indexItem, 1)
      this.value = valueArray.join(', ')
      const valueArray2 = this.value2.split(', ')
      const indexItem2 = valueArray2.findIndex(x => x === item.value2)
      valueArray2.splice(indexItem2, 1)
      this.value2 = valueArray2.join(', ')
    }
    this.onChange(this.value);
    this.onSelected.emit(this.value)
  }

  findItem(value: string) {
    this.itemsFiltered = this.items;
    if (value.length < 1) {
      return
    }
    this.itemsFiltered = this.items.filter(x => {
      const response = x.value.toLowerCase().includes(value.toLocaleLowerCase());
      return response
    });

  }

}


