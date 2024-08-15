package com.example.demo.Repository;




import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.Entity.Userorg;



public interface UserorgRepository extends JpaRepository<Userorg, Long> {
    Userorg findByEmail(String email);
   
}
