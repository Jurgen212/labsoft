import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RememberPassComponent } from './remember-pass/remember-pass.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: `login`    , component : LoginComponent    },
      { path: `register` , component : RegisterComponent },
      { path: `hablameloComentameloConversameloComunicameloDialogameloManifestameloCharlameloAclarameloDecimeloHacemeloSaberTodoBienTodoBelloTodoVacanoTodoTitinoTodoEleganteSisaPaLaqueSeaXd`, component: RememberPassComponent },
      { path: `**`       , redirectTo: `login`           }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
