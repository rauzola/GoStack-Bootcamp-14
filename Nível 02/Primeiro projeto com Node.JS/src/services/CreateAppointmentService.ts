import { startOfHour } from 'date-fns';

import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

/**
 * [x] Recebimento das informações
 * [x] Tratativa de erros/excessões
 * [x] Acesso ao repositorio
 */

interface Request {
  provider: string;
  date: Date;
}

/**
 * Dependency Inversion (SOLID)
 */

class CreateAppointmentService {
  private appointmentsRepository: AppointmentsRepository;

  constructor(appointmentsRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ date, provider }: Request): Appointment {
    const appointmentsDate = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentsRepository.findByDate(
      appointmentsDate,
    );

    if (findAppointmentInSameDate) {
      throw new Error('Essa Hora já está agendado');
    }

    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmentsDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
